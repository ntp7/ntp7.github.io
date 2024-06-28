function showSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.left = "0";
    sidebar.style.boxShadow = "10px 0 15px -5px rgba(0, 0, 0, 0.6)";
}
function hideSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.left = "-412px";
    sidebar.style.boxShadow = "none";
}