/**
 * Old chalk v4 default-import style.
 * chalk@5 is ESM-only and changed packaging — a good DepRisk demo target.
 */
import chalk from 'chalk'

console.log(chalk.green('safe update') + ' · ' + chalk.red('breaking import risk'))
console.log(chalk.bold.blue('deprisk-check demo: chalk 4 → 5'))
