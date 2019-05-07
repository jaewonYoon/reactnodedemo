import constants from "../contstants/actionTypes";

var initialState = {
  news: [],
  newsItem: {},
  newsItemLoading: true
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);

  switch (action.types) {
    case constants.NEWS_RECEIVED:
      updated["news"] = action.news;
      return updated;

    case constants.NEWSITEM_RECEIVED:
      updated["newsItem"] = action.newsItem;
      return updated;

    case constants.NEWSITEM_LOADING:
      updated["newsItemLoading"] = true;
      return updated;

    default:
      return state;
  }
};
