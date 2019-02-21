import { Command, flags } from '@oclif/command';
import { exec } from 'shelljs';

class Drails extends Command {
  static description = 'run your rails commands with docker compose and rails web service';
  static strict = false;
  static examples = [
    'drails db:create',
    'drails g model User',
  ];

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'command',
      required: true,
      description: 'command to run on rails docker compose web service',
    },
  ];

  parseCommand() {
    const { raw } = this.parse(Drails);
    const railsCommand = raw.map(({ input }) => input).join(' ');
    return `docker-compose run --rm web rails ${railsCommand}`;
  }

  async run() {
    const command = this.parseCommand();
    exec(command);
  }
}

export = Drails;
