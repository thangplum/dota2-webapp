import * as  React from 'react';
import { Avatar, Card, Descriptions, Typography } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { Title } = Typography;
const { Meta } = Card;

interface TeamCardProps {
    name: string,
    team_id: number,
    tag?: string,
    logo_url?: string,
    last_match_time: number,
    rating: number,
    wins: number,
    losses: number
}

const TeamCard: React.SFC<TeamCardProps> = ({name, team_id, tag, logo_url, last_match_time, rating, wins, losses}) => {
    const lastMatch = moment(last_match_time * 1000);
    return (
        <div className="site-page-header">
            <Card style={{ width: "100%", marginBottom:"15px", lineHeight:"1.25", backgroundColor:"#ebebea" }}>
                <Meta 
                    style={{ paddingBottom: "10px", fontWeight:"bold" }} 
                    title={<Link to={`/teams/${team_id}`}><Title level={2}>{name || '(no name)'}</Title></Link>} 
                    avatar={<Avatar src={logo_url} alt={tag} />}
                />
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Last match">
                        <time dateTime={lastMatch.toISOString()} title={lastMatch.format('LLLL')}>
                            {lastMatch.fromNow()}
                        </time>
                    </Descriptions.Item>
                    <Descriptions.Item label="Team rating">
                        {rating.toFixed(0)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Win/Loss">{wins || 0} / {losses || 0}</Descriptions.Item>
                    
                </Descriptions>
            </Card>
        </div>
    );
}

export default TeamCard;