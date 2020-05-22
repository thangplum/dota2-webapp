import * as  React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import TeamCard from '../../components/TeamCard';
import { ApplicationState } from '../../store';
import { Team } from '../../store/teams/types';
import { fetchRequest } from '../../store/teams/actions';

const { Content } = Layout;

interface PropsFromState {
    loading: boolean
    data: Team[]
    errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
    fetchTeams: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch

class TeamsIndexPage extends React.Component<AllProps> {
    public componentDidMount() {
      const { data, fetchTeams } = this.props
  
      if (data.length === 0) {
        fetchTeams()
      }
      
    }
  
  
    public render() {
        const { data } = this.props
        console.log(data);
        return (
            <Content style={{ padding: '0 50px' }}>
                <Layout>
                    {data.slice(0, 20).map((team, i) => {
                        return (
                            <div className="site-page-header">
                                <TeamCard name={team.name} team_id={team.team_id} tag={team.tag} logo_url={team.logo_url} last_match_time={team.last_match_time} rating={team.rating} wins={team.wins} losses={team.losses} />
                            </div>
                        );
                    }
                    )}
                    
                </Layout>
            </Content>
        )
    }
}

const mapStateToProps = ({ teams }: ApplicationState) => ({
    loading: teams.loading,
    errors: teams.errors,
    data: teams.data
  })
  
  // mapDispatchToProps is especially useful for constraining our actions to the connected component.
  // You can access these via `this.props`.
  const mapDispatchToProps = {
    fetchTeams: fetchRequest
  }

  // With redux v4's improved typings, we can finally omit generics here.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamsIndexPage)

