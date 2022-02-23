import Header from "../components/Header";
import Map from "../components/map";
import Content_contact from "../components/content_contact";
import Footer from "../components/Footer";
const Contact = {
    render() {
        return /*html*/ `
        ${Header.render()}
        ${Map.render()}
        ${Content_contact.render()}
        ${Footer.render()}
        `;
    }
};
export default Contact;