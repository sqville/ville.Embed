/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SquareEraser",
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

   var pathdregular = "M8.08 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.08c.37.09.71.26 1 .5V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.6a2.47 2.47 0 0 1-.52-1Zm1.36.47a1.5 1.5 0 0 1 0-2.13l4.9-4.9a1.5 1.5 0 0 1 2.12 0l2.1 2.1a1.5 1.5 0 0 1 0 2.13L14.22 18h2.53a.5.5 0 0 1 0 1h-4.1a1.5 1.5 0 0 1-1.12-.44l-2.1-2.1Zm5.61-6.32-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 0 0 0-.71l-2.1-2.1a.5.5 0 0 0-.7 0Zm-1.5 7.1-2.8-2.8-.6.6a.5.5 0 0 0 0 .71l2.1 2.1a.5.5 0 0 0 .7 0l.6-.6Z";
   var pathdfilled = "m8.73 13.64 4.9-4.9A2.48 2.48 0 0 1 17 8.59V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.6a2.5 2.5 0 0 1 .13-3.36Zm7.74-4.2 2.1 2.1a1.5 1.5 0 0 1 0 2.12l-3.6 3.6-4.22-4.22 3.6-3.6a1.5 1.5 0 0 1 2.12 0Zm-2.21 8.52-4.22-4.22-.6.6a1.5 1.5 0 0 0 0 2.13l2.1 2.1a1.5 1.5 0 0 0 1.12.43h4.09a.5.5 0 0 0 0-1h-2.53l.04-.04Z";
   
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