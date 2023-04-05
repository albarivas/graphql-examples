import { LightningElement, wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';

export default class ConferencesPanel extends LightningElement {
    errors;
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
    getConferencesWithTalks({ data, errors }) {
        if (data) {
            this.conferences = data.uiapi.query.Conference__c.edges.map(
                (edge) => edge.node
            );
            this.errors = undefined;
        } else if (errors) {
            this.conferences = undefined;
            this.errors = errors;
        }
    }
}
