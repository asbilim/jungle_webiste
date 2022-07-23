import Title from "./title";
import Logo from "./logo";
import Form from "./forms/form";
function Footer(){


    return(
        <div className="footer">
            <div className="footer_first">
                <Title/>
                <Logo/>
            </div>
            <div className="footer_second">
                <Form/>
            </div>
            <div className="footer_third">
                <p>copyright &copy; kirikode alright reserved</p>
            </div>
        </div>
    )

}

export default Footer;