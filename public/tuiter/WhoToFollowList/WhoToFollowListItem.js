const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
    <button type="submit" class="btn btn-primary mt-1 wd-button-rounding float-end">
        Follow</button>
    <img src="../../images/${who.avatarIcon}"
    class="rounded-circle float-start me-1" width="40px">
    ${who.userName} <i class="fas fa-circle-check d-inline"></i>
    <div class="fw-normal small">
        @${who.handle}
    </div>
    </li>
    `)
} 
export default WhoToFollowListItem;