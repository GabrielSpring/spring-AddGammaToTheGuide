import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ILogger } from "@spt/models/spt/utils/ILogger";

class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = databaseServer.getTables();
        const logger = container.resolve<ILogger>("WinstonLogger");

        const theguide = tables.templates.quests["5c0d4e61d09282029f53920e"];

        const newReward =  {
                availableInGameEditions: [],
                findInRaid: false,
                id: "67e6fff26b054bd2465b00b1",
                index: 0,
                items: [
                    {
                        _id: "67e700022a468ae0571b250f",
                        _tpl: "5857a8bc2459772bad15db29",
                        upd: {
                            SpawnedInSession: true,
                            StackObjectsCount: 1
                        }
                    }
                ],
                target: "67e700022a468ae0571b250f",
                type: "Item",
                unknown: false,
                value: 1
            };

        theguide.rewards.Success.push(newReward);
        logger.info("[Gamma Quest] Sucessfully added Gamma Container to 'The Guide' quest.");
    }
}

export const mod = new Mod();