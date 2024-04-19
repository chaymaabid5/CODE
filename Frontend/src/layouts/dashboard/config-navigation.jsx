import SvgColor from 'src/components/svg-color';

// ------------- Nav section li fiha sommaire ------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Ideas',
    path: '/ideas',
    icon: icon('ic_idea'),
  },
  {
    title: 'forum',
    path: '/forum',
    icon: icon('ic_blog'),
  },
  {
    title: 'idea',
    path: '/dashboard/idea',
    icon: icon('ic_blog'),
  },

];

export default navConfig;
