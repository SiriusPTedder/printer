$(function(){
	var lazyheight = 0; 
	function showload(){
		lazyheight = $(window).scrollTop();
		if ( lazyheight >= 125 ){ 
			$(".jbr_HeaderTop").addClass("hide");
			$(".jbr_Header").height(80);
		} else{
			$(".jbr_HeaderTop").removeClass("hide");
			$(".jbr_Header").height(125);
			return true;
		} 
	}
	$(window).bind("scroll", function(){
		showload();
	}); 
})

$(function(){//登录页输入框焦点效果
	$(".Inputs").focus(function(){
		$(this).addClass("focus");
	});
	$(".Inputs").blur(function(){
		if($(this).val() == ""){
			$(this).removeClass("focus");
		}
	});	
	$(".Inputs3").focus(function(){
		$(this).addClass("focus");
	});
	$(".Inputs3").blur(function(){
		if($(this).val() == ""){
			$(this).removeClass("focus");
		}
	});	
	$(".Inputs2").focus(function(){
		$(this).addClass("focus");
	});
	$(".Inputs2").blur(function(){
		if($(this).val() == ""){
			$(this).removeClass("focus");
		}
	});	
});



  $(function () {//返回顶部
            
            //当点击跳转链接后，回到页面顶部位置
            $("#totop").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });
        });
  
	$(function(){
		$(".shopBar").hover(function(){
			$(".shopBag").show();
		},function(){
			$(".shopBag").hide();
		})
	})
  
    
	//顶部购物车
	$(function(){
		$(".shopBar").hover(function(){
			$(".shopBag").show();
		},function(){
			$(".shopBag").hide();
		})
	})
	
	//顶部下拉
    $(function(){
		 $('.xiala').hover(function(){
			   $(this).find('.con').show();
			   $(this).css({"background":"#fff"});
	     },function(){
			   $(this).find('.con').hide(); 
			   $(this).css({"background":"#F7F7F7"});
		 });
   });

    //我的意造、购物车
    $(function(){
		 $('#myyizao,#mygwc').hover(function(){
			   $(this).find('.con').show();
			   $(this).css({"background":"#fff"});
	     },function(){
			   $(this).find('.con').hide();   
		 });
   });
    //导航下拉
    $(function(){
		 $('.topnav_fl,.topnav_fl02').hover(function(){
			   $(this).find('#left_nav').toggle(); 
		 });
   });
   
    $(function(){
		 $('.left_nav ul li').hover(function(){
			   $(this).find('.nav_con').show();
			   $(this).css({"background":"#8dd40f"});
			   $(this).find('.nav_con dd a').css({"background":"none"});
			   $(this).find('.nav_con dt a').css({"background":"none"});	
	     },function(){
			   $(this).find('.nav_con').hide(); 
			   $(this).css({"background":"#333"});			     
		 });
   });
   //饰品排序切换
	$(function(){
	   var $li = $('ul.goods_px_nav li')
	   $li.click(function(){
		   $(this).addClass('selected')
				   .siblings().removeClass('selected');
		   var index = $li.index(this)
		   $('#con').find('.goods_list')
			   .eq(index).show()
			   .siblings().hide();
	   })
	}); 


	//首页banner
	$(document).ready(function () {
		$(".main_visual").hover(function(){
			$("#btn_prev,#btn_next").fadeIn()
			},function(){
			$("#btn_prev,#btn_next").fadeOut()
			})
		$dragBln = false;
		$(".main_image").touchSlider({
			flexible : true,
			speed : 200,
			btn_prev : $("#btn_prev"),
			btn_next : $("#btn_next"),
			paging : $(".flicking_con a"),
			counter : function (e) {
				$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
			}
		});
		$(".main_image").bind("mousedown", function() {
			$dragBln = false;
		})
		$(".main_image").bind("dragstart", function() {
			$dragBln = true;
		})
		$(".main_image a").click(function() {
			if($dragBln) {
				return false;
			}
		})
		timer = setInterval(function() { $("#btn_next").click();}, 5000);
		$(".main_visual").hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(function() { $("#btn_next").click();}, 5000);
		})
		$(".main_image").bind("touchstart", function() {
			clearInterval(timer);
		}).bind("touchend", function() {
			timer = setInterval(function() { $("#btn_next").click();}, 5000);
		})
	});

//设备首页成功案例切换
$(function(){
    var page = 1;
    var i = 4; //每版放4个图片
    //向后 按钮
    $("span.next").click(function(){    //绑定click事件
	     var $parent = $(this).parents("div.v_show");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width() ;
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
			  if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
				page = 1;
				}else{
				$v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
				page++;
			 }
		 }
   });
    //往前 按钮
    $("span.prev").click(function(){
	     var $parent = $(this).parents("div.v_show");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width();
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
		 	 if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
    });
	
	//进入详细
	$('.v_content_list #v_more').click(function(){
		    $(this).find('.v_more').hide();
			$(this).find('.v_more02').show();
		});

});

//合作客户
$(function(){
    var page = 1;
    var i = 5; //每版放4个图片
    //向后 按钮
    $("span.next02").click(function(){    //绑定click事件
	     var $parent = $(this).parents("div.v_show02");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.v_content_list02"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content02"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width() ;
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
			  if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
				page = 1;
				}else{
				$v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
				page++;
			 }
		 }
   });
    //往前 按钮
    $("span.prev02").click(function(){
	     var $parent = $(this).parents("div.v_show02");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.v_content_list02"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content02"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width();
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
		 	 if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
    });
});


//弹出隐藏层索取资料
function ShowDiv(show_div,bg_div){
document.getElementById(show_div).style.display='block';
document.getElementById(bg_div).style.display='block' ;
var bgdiv = document.getElementById(bg_div);
bgdiv.style.width = document.body.scrollWidth;
// bgdiv.style.height = $(document).height();
$("#"+bg_div).height($(document).height());
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
document.getElementById(show_div).style.display='none';
document.getElementById(bg_div).style.display='none';
};



//详情页产品信息
$(function(){
	var $div_li =$("div.list_r_nav ul li");
	$div_li.click(function(){
		$(this).addClass("sel")            //当前<li>元素高亮
			   .siblings().removeClass("sel");  //去掉其它同辈<li>元素的高亮
		var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
		$("div.list_r_cot > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
				.eq(index).show()   //显示 <li>元素对应的<div>元素
				.siblings().hide(); //隐藏其它几个同辈的<div>元素
	})
})


//产品图片库
$(function(){
    var page = 1;
    var i = 3; //每版放4个图片
    //向后 按钮
    $("span.next03").click(function(){    //绑定click事件
	     var $parent = $(this).parents("div.v_show03");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.v_content_list03"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content03"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width() ;
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
			  if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
				page = 1;
				}else{
				$v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
				page++;
			 }
		 }
   });
    //往前 按钮
    $("span.prev03").click(function(){
	     var $parent = $(this).parents("div.v_show03");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.v_content_list03"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content03"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width();
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
		 	 if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
    });
});











