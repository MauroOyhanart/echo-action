const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `message` input defined in action metadata file
  const message = core.getInput('message');
  console.log(`Message is: ${message}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}