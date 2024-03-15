import CarouselPhones from "@/component/iphone-list/carousel-iphones";
import News from "@/component/news/news";
import Slider from "@/component/slider/slider";
import CarouselWatches from "@/component/watch-list/carousel-apple-watch";

function Home() {
  return (
    <div className="m-auto">
      <Slider />
      <CarouselWatches />
      <CarouselPhones />
      <News />
    </div>
  );
}
export default Home;