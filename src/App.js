import Directory from './components/directory/directory.component';

function App() {
  const categoriesList = [
    {
      id: 1,
      title: 'hats',
      imageUrl:
        'https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl:
        'https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl:
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl:
        'https://i.pinimg.com/originals/3b/a6/79/3ba679fa46d14c310ee8008891ea5754.jpg',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl:
        'https://i.pinimg.com/originals/53/4b/23/534b23f26ccba86efdf270ada6523266.jpg',
    },
  ];
  return (
    <div>
      <Directory category={categoriesList} />
    </div>
  );
}

export default App;
