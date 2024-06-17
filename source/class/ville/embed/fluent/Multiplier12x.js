/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Multiplier12x",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.66 6.03c.2.06.34.26.34.47v7a.5.5 0 0 1-1 0V7.96a6 6 0 0 1-1.24.97.5.5 0 0 1-.52-.86c.94-.56 1.31-1.1 1.64-1.57l.22-.3a.5.5 0 0 1 .56-.17Zm4.33 2.06v-.03l.05-.12c.04-.11.1-.25.2-.39.2-.26.55-.55 1.26-.55.64 0 1.04.2 1.27.5.23.3.35.76.24 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41a22 22 0 0 0-.43.18c-.5.21-1.05.5-1.47 1A3.27 3.27 0 0 0 8 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1H9.03c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.49-.31.89-.76 1.01-1.49.15-.84.02-1.62-.44-2.2C12.1 6.29 11.36 6 10.5 6a2.44 2.44 0 0 0-2.47 1.81L8 7.88v.03L8 7.99v-.06a.5.5 0 0 0 1 .17Zm5.86 2.06a.5.5 0 0 0-.7.7L15.29 12l-1.14 1.15a.5.5 0 0 0 .7.7L16 12.71l1.15 1.14a.5.5 0 0 0 .7-.7L16.71 12l1.14-1.15a.5.5 0 0 0-.7-.7L16 11.29l-1.15-1.14ZM7 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
    FILLED : "M8.7 8.75a.75.75 0 0 0 .8-.7l.02-.1c.02-.08.06-.19.13-.3.1-.16.34-.4.95-.4.58 0 .86.19 1 .38.16.22.27.61.16 1.24a.78.78 0 0 1-.4.6c-.2.13-.42.2-.72.31l-.43.17c-.47.18-1.06.45-1.5 1-.47.55-.71 1.3-.71 2.3a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 0-1.5H9.58c.07-.28.17-.47.28-.6.2-.24.48-.4.9-.56l.27-.1c.34-.12.77-.28 1.12-.5.52-.32.95-.82 1.09-1.61.15-.87.06-1.73-.43-2.38-.5-.69-1.29-1-2.21-1-1.14 0-1.83.5-2.21 1.1A2.53 2.53 0 0 0 8 7.92v.01c0 .01-.02.36 0 .01-.03.41.29.77.7.8Zm6.58 1.47a.75.75 0 1 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 1 0-1.06-1.06l-.72.72-.72-.72ZM7 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4.46 6.03c.32.1.54.39.54.72v6.5a.75.75 0 0 1-1.5 0V8.8c-.24.2-.52.39-.86.6a.75.75 0 0 1-.78-1.3c.58-.34.9-.61 1.13-.86.22-.24.36-.47.58-.81l.04-.08a.75.75 0 0 1 .85-.32Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});