import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="">
    <input id="seach-bar" class="wd-search-bar w-75 mb-2" type="text" placeholder="Search Tuiter">
    
    <i class="fa fa-cog fa-2x d-inline float-end text-primary"></i>

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block" href="entertainment.html">
            <a class="nav-link">Entertainment</a>
          </li>
      </ul>
    <div class="card">
    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1" alt=""
    >
        
    <div class="card-img-overlay card-inverse fw-bold">
        <h2 class="text-stroke text-white position-absolute bottom-0">
            SpaceX's Starship
        </h2>
            
    </div>
    </div>

</div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;
