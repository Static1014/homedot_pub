# _*_ coding:utf-8 _*_
"""
file: test.py
date: 2021-05-21 3:47 PM
author: Static4u
"""


import os
import sys
import subprocess
import platform
import shutil
# import commands  # 该模块只在python2上有，python3中由subprocess代替

def count_pre_space_count(str):
    """计算字符串前面的空格个数"""
    count = 0
    for c in str:
        if c == ' ':
            count += 1
        else:
            return count

# 判断字符串是否以某些指定后缀结尾
def isEndWith(str, suffixArr):
    for suffix in suffixArr:
        if str.endswith(suffix):
            return True
    return False


# 删除文件夹及文件
def delDirsAndFiles(path):
    if not os.path.exists(path):
        return

    if os.path.isdir(path):
        # 目录
        for tmp in os.listdir(path):
            cPath = path + DIR_INTERVAL + tmp
            if os.path.isfile(cPath):
                os.remove(cPath)
            else:
                delDirsAndFiles(cPath)

        if os.path.exists(path):
            os.removedirs(path)
    else:
        os.remove(path)


# 修改文件需要解注和删除的部分
def transformFile(file_path, level):
    print(' ' * level, 'transformFile: ' + os.path.basename(file_path))

    addStart = '<!-- ADD START transformFile by python automatically-->'
    addEnd = '<!-- ADD END transformFile by python automatically-->'
    deleteStart = '<!-- DELETE START transformFile by python automatically-->'
    deleteEnd = '<!-- DELETE END transformFile by python automatically-->'

    tags = [addStart, addEnd, deleteStart, deleteEnd]

    new_file_content = ''
    is_modified = False

    is_add_ing = False
    is_delete_ing = False


    with open(file_path, 'r', encoding='utf-8') as file:
        for line_str in file:
            line = line_str.strip()

            isTag = line.endswith('transformFile by python automatically-->')

            if isTag:
                is_modified = True

                if line.endswith(addStart):
                    is_add_ing = True
                elif line.endswith(addEnd):
                    is_add_ing = False
                elif line.endswith(deleteStart):
                    is_delete_ing = True
                elif line.endswith(deleteEnd):
                    is_delete_ing = False
            else:
                prefixCount = count_pre_space_count(line_str)
                if is_add_ing:
                    # 要解开注释
                    if line.startswith('<!--'):
                        # 截掉收尾的“<!--”和“-->”
                        new_file_content += f"{' ' * prefixCount}{line[4:len(line)-3].strip()}\n"
                    else:
                        # 截掉“// ”
                        new_file_content += f"{' ' * prefixCount}{line[3:].strip()}\n"
                    
                elif not is_delete_ing:
                    new_file_content += line_str

    file.close()
    if is_modified:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_file_content)
        file.close()
        print(' ' * level, '内容转换完成')
    else:
        print(' ' * level, '内容无需修改')


# 压缩js
def ugly_js(path, level=1):
    cmd = 'uglifyjs ' + path + ' -m -o ' + path
    suc = os.system(cmd)
    print(' ' * level, '压缩js: ', '成功' if suc == 0 else '失败', ', cmd: ', cmd)


# 导出文件到指定目录
def exportDir(inPath, outPath, level=1):
    inPathArr = os.listdir(inPath)

    for inTmp in inPathArr:
        inTmpPath = inPath + DIR_INTERVAL + inTmp
        outTmpPath = outPath + DIR_INTERVAL + inTmp

        if (inTmp not in ignoreArr) and (not isEndWith(inTmp, ignoreSuffixes)) and (not isEndWith(inTmpPath, ignoreDirs)):
            isDir = os.path.isdir(inTmpPath)

            pre = '+' if isDir else '-'

            if isDir:
                if len(targetPages) == 0 or (not isEndWith(inPath, ['app_pages'])) or isEndWith(inTmpPath, targetPages):
                    # 如果指定了app_pages下的功能，只导出指定功能文件夹；没指定功能则都导出；不是app_pages下的目录都导出
                    if not os.path.exists(outTmpPath):
                        os.mkdir(outTmpPath)

                    print(pre * level, inTmp)
                    exportDir(inTmpPath, outTmpPath, level + 1)
            else:
                print(pre * level, inTmp)
                if IS_TRANSFORM_FILE and 'app_pages' in inTmpPath and isEndWith(inTmpPath, transformFileSuffix):
                    if isEndWith(inTmpPath, html2JspFileSuffix) and not isEndWith(inTmpPath, noHtml2JspFileSuffix):
                        outTmpPath = outPath + DIR_INTERVAL + inTmp.strip('.html') + '.jsp'
                    shutil.copy(inTmpPath, outTmpPath)
                    transformFile(outTmpPath, level)
                else:
                    shutil.copy(inTmpPath, outTmpPath)

                # 压缩js
                if IS_UGLY_JS and isEndWith(outTmpPath, ['.js']) and not isEndWith(outTmpPath, ['.min.js']):
                    ugly_js(outTmpPath, level)





print(' ====================  开始导出   ====================  ')

# 是否是PC
IS_PC = False
# 是否html转jsp
IS_TRANSFORM_FILE = False
# 是否压缩js文件
IS_UGLY_JS = True

# 文件夹分隔符
# DIR_INTERVAL = '\\' if IS_PC else '/'
DIR_INTERVAL = os.sep


outPathMac = '/Users/xiongjian/Documents/homedot.space/homedot_site/out'
outPathPC = 'D:\\ws_web\\auto-export'

outPath = outPathPC if IS_PC else outPathMac
print('输出路径：' + outPath)

# 指定忽略的文件/目录
ignoreArr = [
    'out',
    '.git',
    '.gitignore',
    '.idea',
    '.sass-cache',
    '.DS_Store',
    'export.py',
    'README.md',
]
# 指定忽略的文件后缀
ignoreSuffixes = [
    '.scss',
#     '.css.map'
]
# 指定忽略的目录和文件
ignoreDirs  = [
    'app_base' + DIR_INTERVAL + 'json',
    'app_base' + DIR_INTERVAL + 'libs' + DIR_INTERVAL + 'pdf',
    'postc' + DIR_INTERVAL + 'data' + DIR_INTERVAL + 'setting.json',
    # 'app_base' + DIR_INTERVAL + 'ui',
]
# 指定要导出的app_pages下的功能
targetPages = [
]

# 指定要进行转jsp的文件后缀
html2JspFileSuffix = [
#     '.html',
]

# 指定不转jsp的文件
noHtml2JspFileSuffix = [
#     '404.html',
#     '500.html',
#     '502.html',
#     'ysypj.html',
#     'test.html',
]

# 指定要进行代码编辑的文件后缀
transformFileSuffix = [
    '.html',
    '.js'
]

curPath = os.getcwd()
print('当前路径：' + curPath)

isExist = os.path.exists(outPath)
if isExist:
    # 删除文件夹及文件
    shutil.rmtree(outPath)
    # delDirsAndFiles(outPath)
os.mkdir(outPath)

exportDir(curPath, outPath)

if 'mac' in platform.platform():
    subprocess.call(['open', outPath])
else:
    os.startfile(outPath)

print(' ====================  导出完成   ====================  ')
