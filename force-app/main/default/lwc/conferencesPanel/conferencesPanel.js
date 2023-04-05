import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';

export default class ConferencesPanel extends LightningElement {
    error;
    conferences;

    @wire(graphql, {
        query: gql`
            query conferencesWithTheirTalks {
                uiapi {
                    query {
                        Conference__c {
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                    Country__c {
                                        value
                                    }
                                    Talks__r {
                                        edges {
                                            node {
                                                Id
                                                Title__c {
                                                    value
                                                }
                                                Speakers__c {
                                                    value
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    })
    getConferencesWithTalks({ data, error }) {
        if (data) {
            this.conferences = data.uiapi.query.Conference__c.edges.map(
                (edge) => edge.node
            );
            //this.isFinalPage = !data.uiapi.query.Opportunity.pageInfo.hasNextPage;
            //this.endCursor = data.uiapi.query.Opportunity.pageInfo.endCursor;
            this.error = undefined;
        } else if (error) {
            this.conferences = undefined;
            this.error = error;
        }
    }
}
