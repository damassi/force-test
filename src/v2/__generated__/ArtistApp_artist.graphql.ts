/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtistApp_artist = {
    readonly internalID: string;
    readonly name: string | null;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"ArtistMeta_artist" | "ArtistHeader_artist" | "NavigationTabs_artist" | "Overview_artist" | "Works_artist">;
    readonly " $refType": "ArtistApp_artist";
};
export type ArtistApp_artist$data = ArtistApp_artist;
export type ArtistApp_artist$key = {
    readonly " $data"?: ArtistApp_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtistApp_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistApp_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistMeta_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistHeader_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NavigationTabs_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Overview_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Works_artist"
    }
  ],
  "type": "Artist"
};
(node as any).hash = '43a29e54cffd62e0a95ac296c8d4ba62';
export default node;
