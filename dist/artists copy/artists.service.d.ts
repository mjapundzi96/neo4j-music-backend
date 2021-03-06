import * as Neo4j from 'neo4j-driver';
export declare class ArtistsService {
    private readonly neo4j;
    constructor(neo4j: Neo4j.Driver);
    getArtist(id: number): Promise<{
        id: any;
        name: any;
        country: any;
        type: any;
        imageUrl: any;
        albums: any[];
    }>;
}
