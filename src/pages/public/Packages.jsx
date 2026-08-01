import PageHeader from "../../components/common/PageHeader";
import PackageComparison from "../../components/PackageComparison";
import CallToAction from "../../components/CallToAction";
import "../../styles/packages.css";

function Packages(){

    return(

        <>

            <PageHeader

                title="Packages"

                subtitle="Choose the perfect package for your vehicle."

            />

            <PackageComparison/>

            <CallToAction/>

        </>

    );

}

export default Packages;