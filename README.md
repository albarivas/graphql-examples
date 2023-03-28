# GraphQL Examples

# Code Examples that show how to work with the Salesforce GraphQL API

1. Clone the repo:

   ```
   git clone git@github.com:albarivas/graphql-examples.git
   ```

1. If you haven't already done so, authorize with your hub org and provide it with an alias (**myhuborg** in the command below):

   ```
   sfdx force:auth:web:login -d -a myhuborg
   ```

1. Create a scratch org and provide it with an alias (**graphql-examples** in the command below):

   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a graphql-examples
   ```

1. Push the app to your scratch org:

   ```
   sfdx force:source:push
   ```

1. Assign the **Community_Conferences** permission set to the default user:

   ```
   sfdx force:user:permset:assign -n Community_Conferences
   ```

1. Open the scratch org:

   ```
   sfdx force:org:open
   ```

1. Execute examples on the [scripts/graphql]('scripts/graphql') folder using a GraphQL client such as Altair. Instructions to set it up [here](https://developer.salesforce.com/docs/platform/graphql/guide/get-started-graphql.html).


