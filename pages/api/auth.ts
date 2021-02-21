import { withSSRContext } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next';

import '../../configureAmplify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();

    res.status(200).json({ user });
};
