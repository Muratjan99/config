" 使用 'nocompatible' 模式，禁用 vi 兼容模式，让 Vim 使用更多现代特性。
set nocompatible
" 启用语法高亮，以便在编辑时语法元素具有不同的颜色。
syntax on
" 启用文件类型检测、插件支持和自动缩进。
filetype plugin indent on
" 搜索时不区分大小写。
set ic
" 高亮搜索结果。
set hlsearch
" 设置编码为 UTF-8。
set encoding=utf-8
" 定义多种文件编码，以便在不同文件中使用不同编码。
set fileencodings=utf-8,ucs-bom,GB2312,big5
" 高亮光标所在行。
set cursorline
" 启用自动缩进。
set autoindent
" 启用智能缩进，让 Vim 自动识别适当的缩进方式。
set smartindent
" 离屏幕底部 4 行时开始滚动，以提供上下文。
set scrolloff=4
" 显示匹配的括号或引号。
set showmatch
" 显示行号。
set nu

" 使用Ctrl键加H、J、K和L键来进行窗口导航
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

" 使用 'nocompatible' 模式，禁用 vi 兼容模式，让 Vim 使用更多现代特性。
set nocompatible

" 停用文件类型检测，因为在 Vundle 插件管理器中会使用。
filetype off

" 设置运行时路径以包括 Vundle，并初始化 Vundle 插件管理器。
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" 插件管理器自身的设置，用于管理插件。
Plugin 'gmarik/Vundle.vim'
" 在这里添加你想要的其他插件。只需在下面添加插件的名称，Vundle 将负责下载和管理它们。

" 所有插件必须在以下行之前添加。
call vundle#end()

" 启用文件类型检测、插件支持和自动缩进。
filetype plugin indent on