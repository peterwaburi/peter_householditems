import { Container } from "react-bootstrap";
import MarketingCampaignCard from "../../components/MarketingCampaignCard";

function Marketing(){

    const campaigns=[

        {
            title:"Weekend Wash Offer",
            description:"20% discount on all premium packages.",
            budget:"KES 50,000"
        },

        {
            title:"Referral Campaign",
            description:"Invite a friend and both earn rewards.",
            budget:"KES 30,000"
        }

    ];

    return(

        <Container className="py-5">

            <h2 className="fw-bold text-primary mb-4">
                Marketing
            </h2>

            {campaigns.map((campaign,index)=>(

                <MarketingCampaignCard
                    key={index}
                    campaign={campaign}
                />

            ))}

        </Container>

    );

}

export default Marketing;