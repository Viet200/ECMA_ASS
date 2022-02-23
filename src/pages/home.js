import Header from "../components/Header";
import Slider from "../components/Slider";
import Products from "../components/content_home";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const Home = {
    async render() {
        return /*html*/ `
            ${Header.render()}
            ${Slider.render()}
            ${await Products.render()}
            ${Banner.render()}
            ${await Posts.render()}
            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    }
};
export default Home;