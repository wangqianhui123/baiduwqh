$(function(){
  var $name = $('#name'),
      $tel  = $('#telephone'),
      $pwd  = $('#password'),
      $pwdd = $('#password_id'),
      $btn  = $('#getId'),
      $sub  = $('#submit'),
      $msg  = $('#name-msg'),
      $msg2 = $('#tel-msg'),
      $msg3 = $('#pwd-msg'),
      $msg4 = $('#pwdd-msg'),
      timer,
      num = 10;

//定时器
$btn.click(function(){
  timer = setInterval(function(){
    num --;
    if(num===0){
      clearInterval(timer);
      $btn.val('获取验证码');
      $btn.removeAttr('disabled');
      num = 10;
    }else{
      $btn.val('获取验证码('+num+'s)');
      $btn.attr('disabled','disabled');
    }
  },1000);
})

//表单验证
$sub.click(function(){
  insname();
  instel();
  inspwd();
  inspwdd();
  if(!insname()||!instel()||!inspwd()||!inspwdd()) 
  return;
});

//字段验证
$name.focusout(function(){
  if(!insname()) $name.select();
});
$tel.focusout(function(){
  if(!instel()) $tel.select();
});
$pwd.focusout(function(){
  if(!inspwd()) $pwd.select();
});
$pwdd.focusout(function(){
  if(!inspwdd()) $pwdd.select();
})


//验证用户名
function insname(){
  //null
  if($name.val() === ''){
    $msg.html('用户名不能为空！');
    return false;
  }
  //是否有非法字符或者为纯数字
  if(/[^\u4E00-\u9FA5\w]/.test($name.val())||!/\D/.test($name.val())){
    $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
    return false;
  }
  $msg.html('');
  return true;
}

//验证手机号码
function instel(){
  //null
  if($tel.val() === ''){
    $msg2.html('手机号码不能为空！');
    return false;
  }
  //11位数字，且以1开头
  if(!/^1\d{10}$/.test($tel.val())){
    $msg2.html('手机号码格式不正确');
    return false;
  }
  $msg2.html('');
  return true;
}

//验证密码格式
function inspwd(){
  //null
  if($pwd.val() === ''){
    $msg3.html('密码不能为空！');
  }
  //至少6位，并由数字、字母组合
  if(!/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/.test($pwd.val())){
    $msg3.html('密码格式不正确');
    return false;
  }
  $msg3.html('');
  return true;
}

//验证验证码
function inspwdd(){
  if($pwdd.val() === ''){
    $msg4.html('请求超时，请稍后再试');
    return false;
  }
  $msg4.html('');
  return true;
}
})
