import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li',(e)=>{
    const $li = $(e.currentTarget)
    $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')

    const index = $li.index()
    // $tabContent.children()
    // 永远不要用 .show .hide 和css
        // .eq(index).css({display:"block"})
        // .siblings().css({display:'none'})

    // 样式与行为分离：css只管样式，js只管行为。
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

// 默认 将li 指向第一个
$tabBar.children().eq(0).trigger('click')