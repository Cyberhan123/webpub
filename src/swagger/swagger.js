const fs = require('fs');
const path = require('path');
const { CodeGen } = require('swagger-taxos-codegen');

const file = path.resolve('./src/swagger/api-docs.json');
const swaggerSpec = JSON.parse(fs.readFileSync(file, 'UTF-8'));

const tsSourceCode = CodeGen.generateCode({
  swagger: swaggerSpec,
});

const outputFile = path.join(__dirname, 'api.ts');
fs.writeFileSync(outputFile, tsSourceCode, { encoding: 'UTF-8' });
console.info('自动生成Swagger Api完成');
