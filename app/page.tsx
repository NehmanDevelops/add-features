import { Approach } from "@/components/approach";
import { Footer } from "@/components/footer";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
