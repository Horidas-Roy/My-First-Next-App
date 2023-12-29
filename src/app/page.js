import Counter from '@/component/Counter/Counter';
import Link from 'next/link';


const Home = () => {
  // throw new Error()
  return (
    <div>
      <h2>Hello world</h2>
      <Counter/>
     <Link href={"/about"}>
     <button className='btn btn-accent'>About</button>
     </Link>
     <Link href={"/contact"}>
     <button className='btn btn-accent'>Contact</button>
     </Link>
    </div>
  );
};

export default Home;