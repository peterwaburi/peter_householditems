import { Card, Button } from "react-bootstrap";

function MarketingCampaignCard({ campaign }){

    return(

        <Card className="shadow-sm border-0 mb-4">

            <Card.Body>

                <h4>{campaign.title}</h4>

                <p>{campaign.description}</p>

                <h5 className="text-primary">
                    Budget: {campaign.budget}
                </h5>

                <Button className="mt-3">
                    Manage Campaign
                </Button>

            </Card.Body>

        </Card>

    );

}

export default MarketingCampaignCard;