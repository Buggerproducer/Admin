const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,

  visistedViews: state => state.tagsView.visistedViews,
  cachedViews: state => state.tagsView.cachedViews,
  permission_routes: state => state.permission_routes
}
export default getters
