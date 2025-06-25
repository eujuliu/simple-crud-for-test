import logger from "../modules/logger.js";
import User from "../models/user.model.js";

export async function create(req, res) {
  try {
    logger.debug(
      `safe data locals on create user, result: ${JSON.stringify(res.locals.safeData)}`,
    );

    const data = res.locals.safeData;

    const exists = await User.findOne({ email: data.email });

    logger.debug(`verify if user exists, result: ${JSON.stringify(exists)}`);

    if (exists) {
      logger.info("already exists an user with this email");

      res
        .status(409)
        .json({ message: "Already exists an user with this email" });

      return;
    }

    const user = await User.create({ name: data.name, email: data.email });

    if (!user) {
      throw new Error("Error when trying to create an user");
    }

    res.status(200).json({ user });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
