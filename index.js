/**
 * Created by limian on 2017/5/11.
 */


function Tab($node) {
    var $nodeChildren = $node.children('ul')

    this.$tabButton = $nodeChildren.eq(0)
    this.$tabContent = $nodeChildren.eq(1)
    //console.log(this.$tabContent)
    this.bind()
}
Tab.prototype.bind = function () {
    var _this = this
    this.$tabButton.on('click',function(e){
        $(e.target).siblings().removeClass('active')
        $(e.target).addClass('active')
        var index = $(e.target).index()
        //console.log(_this.$tabContent.children())

        _this.$tabContent.children().removeClass('show')
        _this.$tabContent.children().eq(index).addClass('show')
    })
}




var Tab = (function () {
    function _Tab($node) {
        var $nodeChildren = $node.children('ul')

        this.$tabButton = $nodeChildren.eq(0)
        this.$tabContent = $nodeChildren.eq(1)
        //console.log(this.$tabContent)
        this.bind()
    }
    _Tab.prototype.bind = function () {
        var _this = this
        this.$tabButton.on('click',function(e){
            $(e.target).siblings().removeClass('active')
            $(e.target).addClass('active')
            var index = $(e.target).index()
            //console.log(_this.$tabContent.children())

            _this.$tabContent.children().removeClass('show')
            _this.$tabContent.children().eq(index).addClass('show')
        })
    }
    return {
        init: function ($nodes) {
            $nodes.each(function (index,node) {
                new _Tab($(node))
            })
        }
    }
})()
Tab.init($('.tab'))
