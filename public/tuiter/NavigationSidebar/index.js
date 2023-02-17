const NavigationSidebar = () => {
    return(`


    <ul class="list-group">
    <a href="../navigation.html" class="text-decoration-none"><li class="list-group-item"><i class="fab fa-twitter"></i></li></a>
    <a href="../home.html" class="text-decoration-none"><li class="list-group-item"><i class="fas fa-house"></i><div class="d-none d-xl-inline ps-1">Home</div></li></a>
    <a href="#" class="text-decoration-none"><li class="list-group-item active"><i class="fas fa-hashtag"></i><div class="d-none d-xl-inline ps-1">Explore</div></li></a>
    <a href="#" class="text-decoration-none"><li class="list-group-item"><i class="fas fa-bell"></i><div class="d-none d-xl-inline ps-1">Notifications</div></li></a>
    <a href="#" class="text-decoration-none"><li class="list-group-item"><i class="fas fa-envelope"></i><div class="d-none d-xl-inline ps-1">Messages</div></li></a>
    <a href="../bookmarks/index.html" class="text-decoration-none"><li class="list-group-item"><i class="fas fa-bookmark"></i><div class="d-none d-xl-inline ps-1">Bookmarks</div></li></a>                    
    <a href="#" class="text-decoration-none"><li class="list-group-item"><i class="fas fa-list-ul"></i><div class="d-none d-xl-inline ps-1">Lists</div></li></a>                    
    <a href="../profile.html" class="text-decoration-none"><li class="list-group-item"><i class="fas fa-user"></i><div class="d-none d-xl-inline ps-1">Profile</div></li></a>
    <li class="list-group-item"><i class="fas fa-circle"></i><div class="d-none d-xl-inline ps-1">More</div></li>                 
    </ul>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;