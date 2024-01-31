import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://st3.depositphotos.com/7738852/37129/i/600/depositphotos_371296164-stock-photo-classic-phone-handset-vintage-green.jpg"
          className="max-w-xl rounded-lg shadow-2xl"
          alt="Phone"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              delay: 0.5,
            },
          }}
        >
          <h1 className="text-5xl font-bold text-violet-700">
            Welcome to PhoneBook!
          </h1>
          <p className="py-6 text-xl font-bold">
            Here you can store all your contacts in one plece.
          </p>
          <Link
            to="/contacts"
            className=" hover:text-white hover:bg-orange-400 hover:border-none btn btn-outline text-xl bg-yellow-300 text-lime-600"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
