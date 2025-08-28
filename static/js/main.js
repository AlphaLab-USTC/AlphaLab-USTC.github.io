document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // 点击汉堡菜单按钮触发菜单
    navbarToggler.addEventListener('click', function(e) {
        e.stopPropagation(); // 阻止事件冒泡
        navbarCollapse.classList.toggle('show');
    });
    
    // 点击菜单项后关闭菜单
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
        });
    });
    
    // 点击外部区域关闭菜单
    document.addEventListener('click', function(e) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            navbarCollapse.classList.remove('show');
        }
    });
    
    // 阻止菜单内部的点击事件冒泡
    navbarCollapse.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});