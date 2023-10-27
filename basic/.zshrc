export ZSH="$HOME/.oh-my-zsh"
export PROXY="http://219.245.186.213:7890"
# ZSH_THEME="robbyrussell"
ZSH_THEME="Chill/chill"
plugins=(
        git
        last-working-dir
        z
        extract
        zsh-syntax-highlighting
        zsh-autosuggestions
    )

source $ZSH/oh-my-zsh.sh
#禁止自动更新
DISABLE_AUTO_UPDATE=true
# alias 配置
alias vzrc="vim ~/.zshrc"
alias svrc="source ~/.zshrc"
alias vvrc="vim ~/.vimrc"
alias szrc="source ~/.vimrc"
alias c="clear"
alias pon="export http_proxy="$PROXY" && export https_proxy="$PROXY" && export ftp_proxy="$PROXY"&& export socks_proxy="$PROXY" && echo -e "开启代理""
alias poff="unset ALL_PROXY && unset http_proxy && unset https_proxy && echo -e "已关闭代理""