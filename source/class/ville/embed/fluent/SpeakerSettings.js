/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SpeakerSettings",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 3a1 1 0 0 0-1.68-.73l-3.88 3.6A.5.5 0 0 1 6.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 0 1 .34.13l3.22 2.99a5.46 5.46 0 0 1-.62-1.94L7.12 13.4A1.5 1.5 0 0 0 6.1 13H3.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5h2.6c.38 0 .75-.14 1.02-.4L11 3v7.26c.3-.25.64-.48 1-.66V3Zm.06 8.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.43-2.48l.47-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    FILLED : "M12 3a1 1 0 0 0-1.68-.73l-3.87 3.6A.5.5 0 0 1 6.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 0 1 .35.13l3.21 2.98A5.48 5.48 0 0 1 12 9.6V3Zm.07 8.44-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.45-.12a2 2 0 0 0 1.44-2.48Zm2.43 4.06a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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