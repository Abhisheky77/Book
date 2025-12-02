// import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
      <>
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>

      <div className="w-full h-[70vh] border border-gray-800 rounded-xl flex flex-col justify-center items-center bg-black">
        <p className="text-lg text-gray-300">You have no products</p>
        <p className="text-sm text-gray-500 mb-4">
          Add your first product to start selling.
        </p>

        <Button className="bg-white text-black hover:bg-gray-200">
          Add Product
        </Button>
      </div>
    </>
  );
};

export default HomePage;
