/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlobeShield",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M10 18c.5 0 .97-.04 1.44-.13a5.85 5.85 0 0 1-.75-1.08c-.24.14-.47.21-.69.21-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6H10v-1H7.2a14.87 14.87 0 0 1 0-5h5.6c.09.56.15 1.16.18 1.78a6.32 6.32 0 0 0 .95-.82c-.03-.32-.07-.65-.12-.96h2.73c.21.55.35 1.13.42 1.74.3.22.66.43 1.04.57A8 8 0 1 0 10 18Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1Zm6.21 7.58a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z";
   var pathdfilled = "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76l.1.95a1.63 1.63 0 0 1 2.2.09c.42.43 1.08.98 1.85 1.27a7.98 7.98 0 0 0-.4-2.31Zm-4.77 0c.08.57.13 1.16.15 1.78-.47.33-1.03.61-1.63.7-.68.09-1.36.66-1.36 1.52v1H7.16a19.44 19.44 0 0 1 0-5h5.68Zm-5.52 6H10v.5c0 1.42.45 2.55 1.07 3.4l-.07.08c-.35.37-.7.52-1 .52-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32Zm.57 4.22A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5Zm16.11-1.54a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});