using GraphQL;
using GraphQL.Client.Abstractions;
using lambda.Controllers;
using lambda.ResponseTypes;

namespace lambda;

public class OwnerConsumer
{
    private readonly IGraphQLClient _client;

    public OwnerConsumer(IGraphQLClient client)
    {
        _client = client;
    }
    
    public async Task<List<Event>> QueryThreeUpcomingEvents()
    {
        var query = new GraphQLRequest
        {
            Query = @"query ($urlname: String!) {
                              groupByUrlname(urlname: $urlname) {
                                upcomingEvents(input: {first: 3}) {  
                                  edges {
                                    node {
                                      title
                                      eventUrl
                                      dateTime
                                    }
                                  }
                                }
                              }
                            }",
            Variables = new { urlname =  "code-and-coffee-st-louis" }
        };
            
        var response = await _client.SendQueryAsync<ResponseEventCollectionType>(query);
        return response.Data.GroupByUrlname.UpcomingEvents.Edges.Select(e=>new Event(e.Node.title,e.Node.eventUrl,e.Node.dateTime)).ToList();
    }
}

