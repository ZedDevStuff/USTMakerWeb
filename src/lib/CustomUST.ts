export class CustomUST {
    Name: string;
    Author: string;
    Description: string;
    levels: Map<string, Map<string, string>> = new Map();

    constructor(name: string, author: string, description: string) {
        this.Name = name;
        this.Author = author;
        this.Description = description;
    }

    static getTemplate(): CustomUST {
        let standard: Map<string, string> = this.templateLevel(["clean", "battle"]);
        let standardTwo: Map<string, string> = this.templateLevel(["clean1", "clean2", "battle1", "battle2"]);

        let ust = new CustomUST("Name", "Author", "Description");
        
        ust.levels.set("global", new Map([["audioClipName", "relative/path/to/audio"]]));

        // Prelude
        ust.levels.set("0-0", standard);
        ust.levels.set("0-1", standard);
        ust.levels.set("0-2", standard);
        ust.levels.set("0-3", standard);
        ust.levels.set("0-4", standard);
        ust.levels.set("0-5", this.templateLevel(["boss1", "boss2"]));
        
        // Act I
        ust.levels.set("1-1", this.templateLevel(["clean1", "clean2", "battle"]));
        ust.levels.set("1-2", this.templateLevel(["clean0", "clean1", "clean2", "battle0", "battle1", "battle2"]));
        ust.levels.set("1-3", this.templateLevel(["clean", "battle", "boss"]));
        ust.levels.set("1-4", this.templateLevel(["piano", "intro", "boss"]));
        ust.levels.set("2-1", standard);
        ust.levels.set("2-2", standard);
        ust.levels.set("2-3", standard);
        ust.levels.set("2-4", this.templateLevel(["boss1", "boss2"]));
        ust.levels.set("3-1", standardTwo);
        ust.levels.set("3-2", this.templateLevel(["intro1", "intro2", "boss"]));
        
        // Act II
        ust.levels.set("4-1", standard);
        ust.levels.set("4-2", standard);
        ust.levels.set("4-3", this.templateLevel(["clean1", "clean2", "clean3", "battle1", "battle2", "battle3"]));
        ust.levels.set("4-4", this.templateLevel(["drone", "bassline", "intro", "boss", "outro"]));
        ust.levels.set("5-1", standard);
        ust.levels.set("5-2", this.templateLevel(["boss1", "boss2", "boss3"]));
        ust.levels.set("5-3", standardTwo);
        ust.levels.set("5-4", this.templateLevel(["boss1", "boss2"]));
        ust.levels.set("6-1", this.templateLevel(["clean", "battle", "boss"]));
        ust.levels.set("6-2", this.templateLevel(["boss"]));
        
        // Act III
        ust.levels.set("7-1", this.templateLevel(["clean", "battle", "boss1", "boss2"]));
        ust.levels.set("7-2", standardTwo);
        ust.levels.set("7-3", standardTwo);
        ust.levels.set("7-4", this.templateLevel(["outside1", "outside2", "outside3", "outside4", "outside5", "outside6", "inside1", "inside2", "inside3", "escape1", "escape2", "escape3"]));
        
        // Prime Sanctums
        ust.levels.set("P-1", this.templateLevel(["intro1", "intro2", "intro3", "intro4", "boss1", "speech", "boss2"]));
        ust.levels.set("P-2", this.templateLevel(["intro", "weezer", "clean", "battle", "boss1", "speech", "boss2"]));
        
        return ust;
    }
    private static templateLevel(entries: string[]) {
        let level = new Map();
        entries.forEach(entry => {
            level.set(entry, "relative/path/to/audio");
        });
        return level;
    }
    static fromJson(json: string): CustomUST | null {
        let obj: any;
        try {
            obj = JSON.parse(json);
        } catch (e) {
            return null;
        }
        let ust = new CustomUST(obj.Name, obj.Author, obj.Description);
        let levels = obj.levels;
        let keys = Object.keys(levels);
        for (let level in keys) {
            let levelName = keys[level];
            let levelData = levels[levelName];
            let levelMap = new Map<string, string>();
            let levelKeys = Object.keys(levelData);
            for (let key in levelKeys) {
                let keyName = levelKeys[key];
                let keyData = levelData[keyName];
                levelMap.set(keyName, keyData);
            }
            ust.levels.set(levelName, levelMap);
        }
        return ust;
    }
}