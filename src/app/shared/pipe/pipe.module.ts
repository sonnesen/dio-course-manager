import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        PipeModule
    ]
})
export class PipeModule {

}