/*
 *system imports
 */
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

/*
 *Define Swagger config
 */
const docucmentBuilderOptions = new DocumentBuilder()
    .setTitle('Test Task')
    .setDescription('Integration APIs')
    .build();

/*
 *Function to create a Swagger document
 */
async function document(app: NestExpressApplication): Promise<OpenAPIObject> {
    return SwaggerModule.createDocument(app, docucmentBuilderOptions);
}

/*
 *Function to initialize and setup a Swagger document
 */
export async function initializeSwagger(app: NestExpressApplication) {
    SwaggerModule.setup('docs', app, await document(app), {
        customSiteTitle: 'Test Task APIs Documentation',
        customCss:
            '.models { display: none !important; } \
            .swagger-ui .opblock-tag { font-size: 16px; } \
            .swagger-ui .opblock-tag { background: rgba(0,0,0,.08); } \
            .swagger-ui .opblock-tag:hover { background-color: grey; color: #fff; } \
            .opblock-summary-delete .opblock-summary-method { padding: 6px 13px !important; }',
    });
}
