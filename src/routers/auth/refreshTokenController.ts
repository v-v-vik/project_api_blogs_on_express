import {Request, Response} from "express";
import {authService} from "../../domain/authService";
import {HttpStatuses, ResultStatus} from "../../result-object/result code";


export const refreshTokenController = async (req: Request,
                                                         res: Response)=> {


    const refreshToken = req.cookies.refreshToken;
    const result = await authService.refreshToken(refreshToken, req.body);

    if (result.status !== ResultStatus.Success) {
        res.status(HttpStatuses.Unauthorized).send();
        return;
    }

    res
        .cookie("refreshToken", result.data[1], {
            httpOnly: true,
            secure: true
        })
        .status(HttpStatuses.Success)
        .json({ accessToken: result.data[0]});

}