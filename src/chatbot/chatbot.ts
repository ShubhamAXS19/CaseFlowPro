// const pinecone = require('pinecone-client');
// const { Pinecone } = require('langchain-community');
// const { ChatPromptTemplate, ChatOpenAI } = require('langchain-prompts');
// const { StrOutputParser } = require('langchain-core');
// const { ConfigurableField, RunnablePassthrough } = require('langchain-core/runnables');

// // Initialize Pinecone
// pinecone.init({
//     apiKey: 'YOUR_PINECONE_API_KEY',
//     environment: 'YOUR_PINECONE_ENVIRONMENT',
// });

// const indexName = 'langchain-demo';

// async function loadDocs(directory) {
//     const loader = new DirectoryLoader(directory);
//     const documents = await loader.load();
//     return documents;
// }

// async function splitDocs(documents, chunkSize = 1000, chunkOverlap = 20) {
//     const textSplitter = new RecursiveCharacterTextSplitter(chunkSize, chunkOverlap);
//     const docs = await textSplitter.splitDocuments(documents);
//     return docs;
// }

// async function getSimilarDocs(query, k = 2, score = false) {
//     if (score) {
//         const similarDocs = await index.similaritySearchWithScore(query, k);
//         return similarDocs;
//     } else {
//         const similarDocs = await index.similaritySearch(query, k);
//         return similarDocs;
//     }
// }

// async function getAnswer(query) {
//     const similarDocs = await getSimilarDocs(query);
//     const answer = await chain.run({ input_documents: similarDocs, question: query });
//     return answer;
// }

// // Example usage
// const directory = '/content/data';
// const query = "How is india's economy";

// loadDocs(directory)
//     .then((documents) => splitDocs(documents))
//     .then((docs) => {
//         const vectorstore = Pinecone.fromDocuments(docs, embeddings, { indexName });
//         const prompt = new ChatPromptTemplate('Answer the question based only on the following context:\n{context}\nQuestion: {question}');
//         const model = new ChatOpenAI();
//         const retriever = vectorstore.asRetriever();
//         const configurableRetriever = retriever.configurableFields({
//             search_kwargs: new ConfigurableField({
//                 id: 'search_kwargs',
//                 name: 'Search Kwargs',
//                 description: 'The search kwargs to use',
//             }),
//         });
//         const chain = (
//             { context: configurableRetriever, question: new RunnablePassthrough() }
//             | prompt
//             | model
//             | new StrOutputParser()
//         );

//         return getAnswer(query);
//     })
//     .then((answer) => {
//         console.log(answer);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


