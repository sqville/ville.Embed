/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ThumbLike",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.05 2.3c.34-.98 1.63-1.43 2.43-.6.17.17.33.36.44.52.32.48.45 1.12.5 1.73.05.63.02 1.3-.05 1.91-.06.62-.16 1.18-.24 1.59v.05H14a3 3 0 0 1 2.95 3.54l-.69 3.76a4.5 4.5 0 0 1-5.6 3.53l-5.6-1.52a2.5 2.5 0 0 1-1.8-1.92l-.35-1.77c-.28-1.39.78-2.56 1.9-3 .33-.13.62-.3.85-.5 1.7-1.5 2.32-2.72 3.38-4.84.36-.71.72-1.68 1-2.49Zm1.97 5.58v-.04a13.7 13.7 0 0 0 .13-.58c.08-.4.17-.93.23-1.5.06-.58.09-1.18.04-1.73a2.73 2.73 0 0 0-.33-1.25 3.26 3.26 0 0 0-.33-.39c-.2-.2-.63-.16-.76.23-.29.82-.67 1.83-1.05 2.6-1.07 2.14-1.76 3.5-3.62 5.15-.34.3-.74.52-1.13.68-.88.34-1.45 1.14-1.3 1.87l.35 1.77c.11.56.53 1 1.08 1.15l5.6 1.53c1.98.54 4-.73 4.36-2.75l.68-3.76a2 2 0 0 0-1.96-2.36h-1.5a.5.5 0 0 1-.5-.62Z",
    FILLED : "M12.48 1.7c-.8-.83-2.09-.38-2.43.6-.28.8-.64 1.77-1 2.48C8 6.9 7.38 8.1 5.67 9.63c-.23.2-.52.36-.84.49-1.13.44-2.2 1.61-1.91 3l.35 1.77a2.5 2.5 0 0 0 1.8 1.92l5.6 1.52a4.5 4.5 0 0 0 5.6-3.53l.69-3.76A3 3 0 0 0 14 7.5h-.89l.01-.05c.08-.41.18-.97.24-1.59.07-.6.1-1.28.05-1.9a3.68 3.68 0 0 0-.5-1.74 4.16 4.16 0 0 0-.44-.52Z"
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